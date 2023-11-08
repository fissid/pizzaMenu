export default function Footer() {
  const hours = {
    open: 12,
    close: 22,
  };
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= hours.open && currentHour <= hours.close;
  return <footer className="footer">{isOpen ? "We are open!" : "Sorry! we are closed."}</footer>;
}
