const MenuIcon = () => {
  return (
    <div className='menu-icon'>
      <div></div>
      <div></div>
      <div></div>
      <style jsx>{`
        .menu-icon div{
          position: relative;
          width: 25px;
          height: 2px;
          background-color: white;
          margin: 6px 0;
        }
        .menu-icon:hover div {
          height: 3px;
          bottom: 1px;
        }
      `}</style>
    </div>
  );
}

export default MenuIcon;