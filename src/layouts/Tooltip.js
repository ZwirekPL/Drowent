import "../assets/style/sass/Tooltip.sass";

function Tooltip(props) {
  return (
    <div class="tooltip">
      <span class="tooltiptext" style={{ visibility: `${props.visible}` }}>
        Kliknij aby otworzyć menu
      </span>
    </div>
  );
}

export default Tooltip;
