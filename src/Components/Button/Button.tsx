import React, { useCallback } from 'react';
import useClass from '../../Utils/useClass';

export interface GeneralProps {
   prefix?: string;
   className?: string;
   children?: React.ReactNode;
   style?: React.CSSProperties;
}

export interface AsProps<As extends React.ElementType | string = React.ElementType>
   extends GeneralProps {
   as?: As;
}

export interface ButtonProps extends AsProps<'button'>, React.HTMLAttributes<HTMLElement> {
   appearence?: 'solid' | 'bordered' | 'link';
   color?: 'pink' | 'orange' | 'deep' | 'red' | 'blue' | 'yellow' | 'green' | 'purple';
   size?: 'xs' | 'sm' | 'md' | 'lg';
   type?: 'submit' | 'reset' | 'button';
   disabled?: boolean;
   actived?: boolean;
   block?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   (props: ButtonProps, ref) => {
      const {
         appearence = 'solid',
         color = 'green',
         size = 'sm',
         prefix = 'btn',
         className,
         children,
         as,
         type,
         disabled,
         actived,
         block,
         ...rest
      } = props;

      const { merge, addClassPrefix } = useClass(prefix);

      const classes = merge(
         className,
         addClassPrefix(appearence, size, color, { disabled, actived, block })
      );

      const Component = as || 'button';

      const renderButton = useCallback(() => {
         return <>{children}</>;
      }, [appearence, color, size, className, children]);

      return (
         <Component {...rest} type={type} ref={ref} className={classes} disabled={disabled}>
            {renderButton()}
         </Component>
      );
   }
);
