import React, {
  ReactHTML,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import cn from 'classnames';

import { Locales, useLocales } from 'localization';

import s from './styles.module.scss';

type Size = {
  width: number;
  height: number;
};

type Props = {
  text?: string | Locales;
  row?: boolean;
  right?: boolean;
  node?: keyof ReactHTML;
  paragraph?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const Root = React.forwardRef<
  HTMLDivElement,
  React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement> & { node: keyof ReactHTML }
>(({ node, ...props }, ref) => React.createElement(node, { ref, ...props }));

export default ({
  text,
  row,
  right,
  node = 'span',
  paragraph,
  className,
  children
}: Props): JSX.Element => {
  const { l, language } = useLocales();

  const [content, setContent] = useState<string | React.ReactNode>(
    children || l(text)
  );
  const [nextContent, setNextContent] = useState<string | React.ReactNode>(
    children || l(text)
  );
  const [conversion, setConversion] = useState<boolean>(false);
  const [rootSize, setRootSize] = useState<Size | undefined>();
  const [contentSize, setContentSize] = useState<Size | undefined>();

  const rootNodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rootNode = rootNodeRef.current as HTMLDivElement;
    const size = rootNode.getBoundingClientRect();
    setRootSize({
      width: size.width,
      height: size.height
    });
    setNextContent(children || l(text));
  }, [language, text, children]);

  useEffect(() => {
    if (nextContent === content) return;
    setConversion(true);
  }, [nextContent]);

  const onTransitionEnd = useCallback(() => {
    setConversion(false);
    setContent(nextContent);
  }, [nextContent]);

  useEffect(() => {
    if (!conversion || !rootSize) return;
    const rootNode = rootNodeRef.current as HTMLDivElement;
    const nextContentNode = rootNode.childNodes[1] as HTMLSpanElement;
    const nextSize = nextContentNode.getBoundingClientRect();
    const newWidth = row ? nextSize.width : rootSize.width;
    const newHeight = nextSize.height;
    if (rootSize.width !== newWidth || rootSize.height !== newHeight) {
      setRootSize({
        width: newWidth,
        height: newHeight
      });
      setContentSize(rootSize);
    }
  }, [conversion]);

  return (
    <Root
      node={paragraph ? 'p' : node}
      ref={rootNodeRef}
      style={content !== nextContent ? rootSize : undefined}
      className={cn(
        s.root,
        { [s.row]: row, [s.right]: right, [s.conversion]: !!conversion },
        className
      )}
      onAnimationEnd={onTransitionEnd}
    >
      <span style={conversion ? contentSize : undefined}>{content}</span>
      {!!conversion && <span>{nextContent}</span>}
    </Root>
  );
};
