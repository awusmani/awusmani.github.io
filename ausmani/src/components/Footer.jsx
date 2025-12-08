import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Abdul Wasay Usmani{' '}
        <a
          href="https://www.linkedin.com/in/your-linkedin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/awusmani"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
    </footer>
  );
}
