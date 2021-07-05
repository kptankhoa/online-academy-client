import { List } from '@material-ui/core';

/**
 * 
 * @param {List.props} props 
 * @returns 
 */
function ListItem(props) {
  const { children, ...rest } = props;
  return (
    <List {...rest}>
      {children.map((child, i) => {
        return (
          <div key={i}>
            {child}
          </div>
        );
      })}
    </List>
  );
}

export default ListItem;
