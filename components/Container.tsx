interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return (
    <div className="mx-auto container px-10 lg:px-0 max-w-[1200px]">
      {children}
    </div>
  );
}

export default Container;
