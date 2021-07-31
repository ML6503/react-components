export interface InputEl {    
        id: string;
        label: string;
        type: string;
        className: string;
        value?: string | number;
        options?: Array<string>;
        placeholder?: string;
        name: string;
        pattern?: string;
        onChange: (e: React.ChangeEvent) => void;      
};