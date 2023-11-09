export default function Footer() {
  const hours = {
    open: 12,
    close: 22,
  };
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= hours.open && currentHour <= hours.close;
  return <footer className="footer">{isOpen ? `We are open until ${hours.close}:00. Come visit us or order online` : "Sorry! we are closed."}</footer>;
}
