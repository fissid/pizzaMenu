import Order from "./Order";
export default function Footer() {
  const hours = {
    open: 12,
    close: 22,
  };
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= hours.open && currentHour <= hours.close;
  return <footer className="footer">{isOpen ? <Order hours={hours} /> : <p>{`Sorry! we are closed. We're happy to welcome you between ${hours.open}:00 and ${hours.close}:00.`}</p>}</footer>;
}
