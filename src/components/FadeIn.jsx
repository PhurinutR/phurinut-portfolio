import React, { useEffect, useState } from "react";

export default function FadeIn(props) {
  const [maxIsVisible, setMaxIsVisible] = useState(0);
  const transitionDuration = props.transitionDuration || 400;
  const delay = props.delay || 50;
  const WrapperTag = props.wrapperTag || "div";
  const ChildTag = props.childTag || "div";
  const visible = typeof props.visible === "undefined" ? true : props.visible;

  useEffect(() => {
    let count = React.Children.count(props.children);
    if (!visible) {
      count = 0;
    }

    if (count === maxIsVisible) {
      const timeout = setTimeout(() => {
        if (props.onComplete) props.onComplete();
      }, transitionDuration);
      return () => clearTimeout(timeout);
    }

    const increment = count > maxIsVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setMaxIsVisible(maxIsVisible + increment);
    }, delay);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [
    // eslint-disable-next-line
    React.Children.count(props.children),
    delay,
    maxIsVisible,
    visible,
    transitionDuration,
  ]);

  return (
    <WrapperTag className={props.className}>
      {React.Children.map(props.children, (child, i) => {
        return (
          <ChildTag
            className={props.childClassName}
            style={{
              transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
              transform: maxIsVisible > i ? "none" : "translateY(20px)",
              opacity: maxIsVisible > i ? 1 : 0,
            }}
          >
            {child}
          </ChildTag>
        );
      })}
    </WrapperTag>
  );
}
