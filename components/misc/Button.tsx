import Link from 'next/link';

type ButtonProps = {
  type?: 'button' | 'submit';
  extraClass?: string;
  label: string;
  icon?: JSX.Element;
  variant?: string;
  before?: boolean;
  href?: string;
  prefetch?: boolean;
  div?: boolean;
};

const Button = ({ type, extraClass, label, icon, variant, before, href, prefetch, div = false }: ButtonProps) => {
  const dynamicClass = `gap-3 ${extraClass ? extraClass : ''} ${variant ? variant : 'btn-default'}`;
  const content = (
    <>
      {before && icon}
      <span className='whitespace-nowrap cursor-pointer'>{label}</span>
      {!before && icon}
    </>
  );

  return (
    <>
      {href ? (
        <Link href={href} prefetch={prefetch === false ? false : true} className={dynamicClass} type={type ? type : 'button'}>
          {content}
        </Link>
      ) : div ? (
        <div className={dynamicClass}>{content}</div>
      ) : (
        <button className={dynamicClass} type={type ? type : 'button'}>
          {content}
        </button>
      )}
    </>
  );
};

export default Button;
