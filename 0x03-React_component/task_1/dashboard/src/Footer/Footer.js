import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <><hr id="footer-margin" /><footer className="App-footer">
      <p>
        <em>Copyright {getFullYear()} - {getFooterCopy(false)}</em>
      </p>
    </footer></>
  );
}

export default Footer;
