import { Modal } from 'react-bootstrap';

import styles from './ErrorModal.module.css';

export const ErrorModal = ({error, showHelpCenter, onHide}: {
  error?: string | string[];
  showHelpCenter?: boolean;
  onHide: () => void;
}) => {
  return (
    <Modal 
      show={error ? true : false} 
      onHide={onHide}
      className={styles.modal}
    >
      <Modal.Header className={styles.header} closeButton>
        <Modal.Title className={styles.title}>Oh boy</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        {(typeof error === 'object') && 
          error.map(text => <p key={text}>{text}</p>)
        }

        {(typeof error === 'string') && 
          <p>{error}</p>
        }

        {showHelpCenter && 
          <p><strong>For more help, visit our <a href={process.env.DOMAIN_HELP_CENTER} target="_blank" rel="noreferrer">support center</a>.</strong></p>
        }
      </Modal.Body>
    </Modal>
  )
}