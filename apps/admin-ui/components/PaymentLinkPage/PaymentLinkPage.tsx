import React, { useState, useEffect } from 'react';
import {
  Formlet,
  FormletHeading,
  FormletSubHeading,
  HR,
  HeavyHeader,
  SubmitButton,
} from '@everything-zen/ui-components';
import {
  Answer,
  ItemLine,
  Prompt,
  ReservationItem,
  TextInput,
} from '../Forms/styles';
import { AdminLayout } from '../AdminLayout';

interface StripeCustomer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  phone_from_db?: string;
}

interface StripeProduct {
  id: string;
  name: string;
  description?: string;
  price: {
    id: string;
    amount: number;
    currency: string;
  };
}

interface PaymentLinkPageProps {}

export const PaymentLinkPage: React.FC<PaymentLinkPageProps> = () => {
  const [customers, setCustomers] = useState<StripeCustomer[]>([]);
  const [products, setProducts] = useState<StripeProduct[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<StripeCustomer | null>(null);
  const [customPhone, setCustomPhone] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<StripeProduct | null>(null);
  const [checkoutUrl, setCheckoutUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingCustomers, setLoadingCustomers] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCustomers();
    fetchProducts();
  }, []);

  useEffect(() => {
    // Check for URL parameters to pre-select customer and product
    const urlParams = new URLSearchParams(window.location.search);
    const customerEmail = urlParams.get('customerEmail');
    const charterType = urlParams.get('charterType');

    if (customerEmail || charterType) {
      // Pre-select customer and product when data is loaded
      if (customers.length > 0 && customerEmail) {
        const customer = customers.find(c => c.email === customerEmail);
        if (customer) {
          setSelectedCustomer(customer);
          setCustomPhone(customer.phone_from_db || customer.phone || '');
        }
      }

      if (products.length > 0 && charterType) {
        // Match product by charter type (sunset/afternoon + tip)
        const product = products.find(p => {
          const productName = p.name.toLowerCase();
          const charterTypeLower = charterType.toLowerCase();
          return (
            productName.includes('tip') &&
            ((charterTypeLower.includes('sunset') && productName.includes('sunset')) ||
             (charterTypeLower === 'charter' && productName.includes('afternoon')))
          );
        });
        if (product) {
          setSelectedProduct(product);
        }
      }
    }
  }, [customers, products]);

  const fetchCustomers = async () => {
    try {
      const response = await fetch('/api/getCustomers');
      if (response.ok) {
        const data = await response.json();
        setCustomers(data);
      } else {
        setError('Failed to load customers');
      }
    } catch (err) {
      setError('Failed to load customers');
    } finally {
      setLoadingCustomers(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/getProducts');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        setError('Failed to load products');
      }
    } catch (err) {
      setError('Failed to load products');
    } finally {
      setLoadingProducts(false);
    }
  };

  const handleCustomerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const customer = customers.find(c => c.id === e.target.value);
    if (customer) {
      setSelectedCustomer(customer);
      setCustomPhone(customer.phone_from_db || customer.phone || '');
    }
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const product = products.find(p => p.id === e.target.value);
    setSelectedProduct(product || null);
  };

  const createPaymentLink = async () => {
    if (!selectedCustomer || !selectedProduct) {
      setError('Please select both customer and product');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const sessionResponse = await fetch('/api/createPaymentLink', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerId: selectedCustomer.id,
          productId: selectedProduct.id,
          priceId: selectedProduct.price.id,
        }),
      });

      if (!sessionResponse.ok) {
        const errorData = await sessionResponse.json();
        throw new Error(errorData.error || 'Failed to create checkout session');
      }

      const { url } = await sessionResponse.json();
      setCheckoutUrl(url);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(checkoutUrl);
      // Brief visual feedback
      const button = document.querySelector('[data-copy-button]');
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'COPIED!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 1500);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = checkoutUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  const openSMSApp = () => {
    const phone = customPhone.replace(/\D/g, ''); // Remove non-digits
    const message = encodeURIComponent(
      `Hi ${selectedCustomer?.name}! Here's your payment link for ${selectedProduct?.name} (you can adjust the total amount if you'd like to add a tip): ${checkoutUrl}`
    );
    window.open(`sms:${phone}&body=${message}`);
  };

  return (
    <AdminLayout>
      <Formlet>
        <FormletHeading>CREATE PAYMENT LINK</FormletHeading>
        <FormletSubHeading>SEND PAYMENT LINKS TO CUSTOMERS</FormletSubHeading>
        
        <HR />
        
        <HeavyHeader>CUSTOMER</HeavyHeader>
        {loadingCustomers ? (
          <p>Loading customers...</p>
        ) : (
          <>
            <Prompt>SELECT CUSTOMER</Prompt>
            <Answer onChange={handleCustomerChange} value={selectedCustomer?.id || ''}>
              <option value="">Choose a customer...</option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name} - {customer.email}
                </option>
              ))}
            </Answer>
          </>
        )}

        {selectedCustomer && (
          <>
            <Prompt>PHONE NUMBER</Prompt>
            <TextInput
              value={customPhone}
              onChange={(e) => setCustomPhone(e.target.value)}
              placeholder="Customer phone number"
            />
          </>
        )}

        <HR />

        <HeavyHeader>PRODUCT</HeavyHeader>
        {loadingProducts ? (
          <p>Loading products...</p>
        ) : (
          <>
            <Prompt>SELECT PRODUCT</Prompt>
            <Answer onChange={handleProductChange} value={selectedProduct?.id || ''}>
              <option value="">Choose product...</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </Answer>
          </>
        )}

        <HR />

        {selectedCustomer && selectedProduct && (
          <ItemLine>
            <ReservationItem>
              {selectedProduct.name} for {selectedCustomer.name}
            </ReservationItem>
            <ReservationItem>
              Customer sets amount during checkout
            </ReservationItem>
          </ItemLine>
        )}

        <SubmitButton
          onClick={createPaymentLink}
          disabled={!selectedCustomer || !selectedProduct || loading || loadingCustomers || loadingProducts}
          value={loading ? 'CREATING...' : 'CREATE PAYMENT LINK'}
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {checkoutUrl && (
          <>
            <HR />
            <HeavyHeader>PAYMENT LINK CREATED</HeavyHeader>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <SubmitButton
                onClick={copyToClipboard}
                value="📋 COPY LINK"
                data-copy-button
                style={{ backgroundColor: '#28a745', flex: 1 }}
              />
              <SubmitButton
                onClick={openSMSApp}
                value="💬 SEND SMS"
                style={{ backgroundColor: '#007AFF', flex: 1 }}
              />
            </div>
          </>
        )}
      </Formlet>
    </AdminLayout>
  );
};