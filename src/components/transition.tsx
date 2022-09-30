import { ReactNode, useRef } from "react";
import { Transition } from "react-transition-group";

const defaultStyle = {
  overflow: "hidden",
  transition: `all 500ms ease-in-out`,
  height: "0%",
};

const transitionStyles = (height: string) => ({
  entering: { height: height },
  entered: { height: height },
  exiting: { height: "0" },
  exited: { height: "0" },
  unmounted: { height: "0" },
});

const Collapsible = ({
  open,
  height,
  children,
}: {
  open: boolean;
  height: string;
  children?: ReactNode;
}) => {
  const ref = useRef(null);

  return (
    <Transition nodeRef={ref} in={open} timeout={500}>
      {(state) => (
        <div
          ref={ref}
          style={{ ...defaultStyle, ...transitionStyles(height)[state] }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default Collapsible;
