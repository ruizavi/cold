export interface GeneralProps {
   prefix?: string;
   className?: string;
   children?: React.ReactNode;
   style?: React.CSSProperties;
}

export interface AsProps<As extends React.ElementType | string = keyof React.ElementType>
   extends GeneralProps {
   as?: As;
}
