import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left" aria-hidden>
      </div>
      <div className="footer-center">
        &copy; {new Date().getFullYear()} Abdul W Usmani{' '}
      </div>
    </footer>
  );
}
