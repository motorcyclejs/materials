import { types } from 'typestyle';

export namespace PaperStyleShadow {

  export const shadowTransition: types.NestedCSSProperties =
    {
      transition: `box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1)`,
    };

  export const shadowElevation2dp: types.NestedCSSProperties =
    {
      boxShadow: `0 2px 2px 0 rgba(0, 0, 0, 0.14),
                  0 1px 5px 0 rgba(0, 0, 0, 0.12),
                  0 3px 1px -2px rgba(0, 0, 0, 0.2)`,
    };

  export const shadowElevation4dp: types.NestedCSSProperties =
    {
      boxShadow: `0 4px 5px 0 rgba(0, 0, 0, 0.14),
                  0 1px 10px 0 rgba(0, 0, 0, 0.12),
                  0 2px 4px -1px rgba(0, 0, 0, 0.4)`,
    };

  export const shadowElevation6dp: types.NestedCSSProperties =
    {
      boxShadow: `0 6px 10px 0 rgba(0, 0, 0, 0.14),
                  0 1px 18px 0 rgba(0, 0, 0, 0.12),
                  0 3px 5px -1px rgba(0, 0, 0, 0.4)`,
    };

  export const shadowElevation8dp: types.NestedCSSProperties =
    {
      boxShadow: `0 8px 10px 1px rgba(0, 0, 0, 0.14),
                  0 3px 14px 2px rgba(0, 0, 0, 0.12),
                  0 5px 5px -3px rgba(0, 0, 0, 0.4)`,
    };

  export const shadowElevation16dp: types.NestedCSSProperties =
    {
      boxShadow: `0 16px 24px 2px rgba(0, 0, 0, 0.14),
                  0 6px 30px 5px rgba(0, 0, 0, 0.12),
                  0 8px 10px -5px rgba(0, 0, 0, 0.4)`,
    };

}
