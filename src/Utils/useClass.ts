import { useCallback } from 'react';
import classNames from 'classnames';
import { CLASS_PREFIX } from './const';

export function addPrefix(pre: string, className: string | string[]): string {
   if (!pre || !className) {
      return '';
   }

   if (Array.isArray(className)) {
      return classNames(className.filter(name => !!name).map(name => `${pre}-${name}`));
   }

   if (pre[pre.length - 1] === '-') {
      return `${pre}${className}`;
   }

   return `${pre}-${className}`;
}

export type ClassValue =
   | string
   | number
   | ClassDictionary
   | ClassArray
   | undefined
   | null
   | boolean;

export interface ClassArray extends Array<ClassValue> {}

export interface ClassDictionary {
   [id: string]: any;
}

function useClass(str: string) {
   const classPrefix = CLASS_PREFIX;
   const componentClass = addPrefix(classPrefix, str);

   const prefix = useCallback(
      (...classes: ClassValue[]) => {
         const mergeClasses = classes.length
            ? classNames(...classes)
                 .split(' ')
                 .map(item => addPrefix(componentClass, item))
            : [];

         return mergeClasses.filter(cls => cls).join(' ');
      },
      [componentClass]
   );

   const addClassPrefix = useCallback(
      (...classes: ClassValue[]) => {
         const mergeClasses = prefix(classes);
         return mergeClasses ? `${componentClass} ${mergeClasses}` : componentClass;
      },
      [componentClass, prefix]
   );

   return {
      addClassPrefix,
      merge: classNames,
      prefix
   };
}

export default useClass;
