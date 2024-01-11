export const NavItems = () => {
  const items = [{
    works: 'Works',
    contact: 'Contact',
    about: 'About'
  }]

  return (
    <>
      <div>
        {items.map(item => item.)}
      </div>
    </>
  )
}