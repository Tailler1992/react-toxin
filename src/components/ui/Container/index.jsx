import s from './s.module.scss';

export const Container = ({className, children}) => {
  return (
      <div className={`${s.container} ${className}`}>
        {children}
      </div>
  );
};