import {
  Typography, Box, Checkbox, IconButton, Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ItemsList = ({ title, items, handleCheck, deleteItem }) => {
  return (
    <>
      <Typography variant="h5" component="h2" marginTop={5}>
        {title}
      </Typography>
      <Box>
        {items?.map((item, index) => (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px 10px 0' }}>
              <Box key={item.id}>
                <Checkbox checked={item.checked} onChange={() => handleCheck(index)} />
                <Typography variant='body'
                  sx={{
                    textDecoration: `${item.checked ? 'line-through' : 'none'}`,
                  }}
                >
                {item.name}
                </Typography>
              </Box>
              <Box>
                <IconButton edge="end" aria-label="delete" onClick={() => deleteItem(index)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
            <Divider light />
          </>
        ))}
      </Box>
    </>
  )
}

export default ItemsList;