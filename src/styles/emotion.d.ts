import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      /**#FF9900-오렌지*/ primary: string;
      /**#294D81-네이비*/ secondary: string;
      /**#F0E5CF-상아색*/ tertiary: string;
      /**#C8C6C6-옅은회색*/ option: string;
      /**#F8F7F5-바탕색*/ 'bg-color': string;
    };
    mq: {
      /**max-width: 768px*/ tablet: string;
      /**max-width: 480px*/ phone: string;
    };
    /**32px*/ 'font-3xl': string;
    /**24px*/ 'font-2xl': string;
    /**20px*/ 'font-xl': string;
    /**18px*/ 'font-lg': string;
    /**16px*/ 'font-md': string;
    /**14px*/ 'font-sm': string;
    /**12px*/ 'font-xs': string;
    /**200*/ 'font-light': number;
    /**300*/ 'font-regular': number;
    /**500*/ 'font-medium': number;
    /**600*/ 'font-semibold': number;
    /**700*/ 'font-bold': number;
  }
}
