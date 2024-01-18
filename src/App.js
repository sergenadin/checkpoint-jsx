
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from './composants/Image';
import Name from './composants/Name';
import Price from './composants/Price';
import Description from './composants/Description';
import './index.css';
function App() {
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary">
            <Price />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
