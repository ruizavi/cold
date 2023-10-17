import React, { useCallback } from 'react';
import { COLORS, SIZES } from '../../Utils/const';
import { AsProps } from '../../Utils/interfaces';
import useClass from '../../Utils/useClass';
import propTypes from 'prop-types';

import './Loader.less';

export interface LoaderProps extends AsProps<'div'> {
   speed?: 'slow' | 'normal' | 'fast';
   size?: SIZES;
   center?: boolean;
   message?: string;
   type?: 'bars' | 'spinner' | 'dots' | 'flip' | 'lines';
   color?: COLORS;
}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>((props, ref) => {
   const {
      speed = 'normal',
      size = 'sm',
      center = false,
      message,
      type = 'spinner',
      color = 'blue',
      prefix = 'loader',
      className,
      as,
      ...rest
   } = props;

   const { addClassPrefix, merge } = useClass(prefix);

   const classes = merge(className, addClassPrefix(speed, size, type, color, { center }));

   const renderLoader = useCallback(() => {
      return (
         <>
            <span></span>
            {message}
         </>
      );
   }, [speed, size, message, type, color, className, center]);

   const Component = as || 'div';

   const role = 'Loader';

   return (
      <Component {...rest} ref={ref} className={classes} role={role}>
         {renderLoader()}
      </Component>
   );
});

Loader.displayName = 'Loader';
Loader.propTypes = {
   speed: propTypes.oneOf(['slow', 'normal', 'fast']),
   size: propTypes.oneOf(['xs', 'sm', 'md', 'lg']),
   center: propTypes.bool,
   message: propTypes.string,
   type: propTypes.oneOf(['bars', 'spinner', 'dots', 'flip', 'lines']),
   color: propTypes.oneOf(['pink', 'orange', 'deep', 'red', 'blue', 'yellow', 'green', 'purple'])
};

export default Loader;
