import classNames from 'classnames';
import { CLASS_PREFIX } from './const';
import { useCallback } from 'react';

function addPrefix(prefix: string, className: string | string[]) {
   if (!prefix || className) return '';

   if (Array.isArray(className))
      return classNames(className.filter(n => !!n).map(n => `${prefix}-${n}`));

   return `${prefix}-${className}`;
}

export interface ClassDictionary {
   [id: string]: any;
}

export interface ClassArray extends Array<ClassValue> {}

export type ClassValue =
   | string
   | number
   | ClassDictionary
   | ClassArray
   | undefined
   | null
   | boolean;

function useClass(str: string) {
   const classPrefix = CLASS_PREFIX;
   const componentClass = addPrefix(classPrefix, str);

   const prefix = useCallback(
      (...classes: ClassValue[]) => {
         const mergeClasses = !classes.length
            ? []
            : classNames(...classes)
                 .split(' ')
                 .map(item => addPrefix(componentClass, item));

         return mergeClasses.filter(cls => cls).join(' ');
      },
      [componentClass]
   );

   const addClassPrefix = useCallback((...classes: ClassValue[]) => {
      const mergeClasses = prefix(classes);
      return mergeClasses ? `${componentClass} ${mergeClasses}` : componentClass;
   }, []);

   return { merge: classNames, addClassPrefix };
}

export default useClass;
