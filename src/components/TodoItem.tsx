type Props = {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export function TodoItem(props: Props) {
  return (
    <li>
      <span
        style={{
          textDecoration: props.completed ? "line-through" : "none",
          marginRight: "10px",
        }}
      >
        {props.text}
      </span>

      <button onClick={props.onToggle}>
        {props.completed ? "Отменить" : "Выполнено"}
      </button>

      <button onClick={props.onDelete} style={{ marginLeft: "10px" }}>
        Удалить
      </button>
    </li>
  )
}