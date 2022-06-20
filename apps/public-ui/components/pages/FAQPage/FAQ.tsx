import { Answer, Frame, Header, Question, Toggle } from './styles';
import { RefObject, useEffect, useRef, useState } from 'react';

type FAQProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
};
export const FAQ: React.FC<FAQProps> = ({
  question,
  answer,
  isOpen,
  toggleOpen,
}) => {
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined); // in px
  const headerEl = useRef<RefObject<HTMLElement>>();

  useEffect(() => {
    isOpen
      ? setMaxHeight(document.documentElement.scrollHeight + 3 * 16)
      : // @ts-ignore
        setMaxHeight(headerEl.current?.scrollHeight + 3 * 16);
  }, [isOpen]);
  return (
    <Frame onClick={() => toggleOpen()} isActive={isOpen} maxHeight={maxHeight}>
      {/* @ts-ignore*/}
      <Header ref={headerEl}>
        <Question>{question.toUpperCase()}</Question>
        <Toggle isActive={isOpen}>
          <div />
          <div />
        </Toggle>
      </Header>
      <Answer isActive={isOpen}>{answer}</Answer>
    </Frame>
  );
};
