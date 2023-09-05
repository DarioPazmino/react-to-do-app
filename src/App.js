import { useState } from 'react';
import { Box, TextField, Button, Container } from '@mui/material';
import ItemsList from './components/ItemsList';

function App() {
  const [fieldValue, setFieldValue] = useState('');
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Buy groceries',
      checked: false,
    },
    {
      id: 2,
      name: 'Walk dog',
      checked: true,
    },
  ]);

  const handleChange = (e) => {
    setFieldValue(e.target.value);
  }

  const addItem = () => {
    const newItem = {
      id: Math.random(0, 1000000),
      name: fieldValue,
      checked: false,
    }
    if (fieldValue) setItems(prev => [...prev, newItem]);
    setFieldValue('');
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addItem();
    }
  }

  const deleteItem = (index) => {
    const itemsCopy = [...items];
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
  }

  // index are messed up, not correct item
  const handleCheck = (index) => {
    const itemsCopy = [...items];
    itemsCopy[index] = {
      ...itemsCopy[index],
      checked: !itemsCopy[index].checked,
    }
    setItems(itemsCopy);
  }

  return (
    <Container maxWidth="sm">
      {/* input */}
      <Box
        component="form"
        sx={{
          padding: '20px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="What's next?"
          variant="outlined"
          onChange={handleChange}
          onKeyDown={e => handleKey(e)}
          value={fieldValue}
        />
        <Button variant="contained" onClick={addItem}>Add</Button>
      </Box>

      {/* render items */}
      <ItemsList
        title="To Do"
        items={items.filter(item => !item.checked)}
        handleCheck={handleCheck}
        deleteItem={deleteItem}
      />

      {/* completed */}
      <ItemsList
        title="Completed"
        items={items.filter(item => item.checked)}
        handleCheck={handleCheck}
        deleteItem={deleteItem}
      />
    </Container>
  );
}

export default App;
