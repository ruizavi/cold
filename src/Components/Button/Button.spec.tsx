import { afterEach, describe, expect, it } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react';
import Button from './Button';

describe('Button element', () => {
   afterEach(cleanup);

   const children = 'Test';

   it('should render button', () => {
      render(<Button>{children}</Button>);
   });

   it('should output a button', () => {
      render(<Button>{children}</Button>);

      screen.getByRole('button');
   });

   it('should render "Test"', () => {
      render(<Button>{children}</Button>);

      screen.getByText(children);
   });

   it('should have a default classes', () => {
      const { getByRole } = render(<Button>{children}</Button>);

      const button = getByRole('button');

      const classes = button.classList;

      const defaultClasses = ['plsm-btn', 'plsm-btn-solid', 'plsm-btn-sm', 'plsm-btn-green'];

      defaultClasses.forEach(cls => {
         expect(classes.contains(cls)).toBe(true);
      });
   });
});
