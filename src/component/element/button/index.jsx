const Button = (props) => {
  const { children, classname } = props;
  return <button className={`text-base z-50 ${classname}`}>{children}</button>;
};

export default Button;
