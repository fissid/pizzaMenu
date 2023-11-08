export default function Footer() {
  const hours = {
    open: 12,
    close: 22,
  };
  const currentHour = new Date().getHours();
  return <footer>{currentHour >= hours.open && currentHour <= hours.close ? "We are open!" : "Sorry! we are closed."}</footer>;
}
