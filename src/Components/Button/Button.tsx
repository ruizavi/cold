import React, { useCallback } from 'react';
import useClass from '../../Utils/useClass';
import { COLORS, SIZES } from '../../Utils/const';
import { AsProps } from '../../Utils/interfaces';
import './Button.less';
export interface ButtonProps extends AsProps<'button'>, React.HTMLAttributes<HTMLElement> {
   appearence?: 'solid' | 'bordered' | 'link';
   color?: COLORS;
   size?: SIZES;
   type?: 'submit' | 'reset' | 'button';
   disabled?: boolean;
   actived?: boolean;
   block?: boolean;
   isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
   const {
      appearence = 'solid',
      color = 'green',
      size = 'sm',
      prefix = 'btn',
      className,
      children,
      as,
      type = 'button',
      disabled,
      actived,
      block,
      isLoading,
      ...rest
   } = props;

   const { merge, addClassPrefix } = useClass(prefix);

   const classes = merge(
      className,
      addClassPrefix(appearence, size, color, { disabled, actived, block, isLoading })
   );

   const Component = as || 'button';

   const renderButton = useCallback(() => {
      return isLoading ? <span></span> : <>{children}</>;
   }, [appearence, color, size, className, children, actived, block, isLoading, disabled]);

   return (
      <Component {...rest} type={type} ref={ref} className={classes} disabled={disabled}>
         {renderButton()}
      </Component>
   );
});

export default Button;
