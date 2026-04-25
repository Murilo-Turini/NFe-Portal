export default function Card({ title, copy, action, children, className = "" }) {
  return (
    <article className={`card ${className}`.trim()}>
      {(title || copy || action) && (
        <div className="card-header">
          <div>
            {title ? <h3 className="card-title">{title}</h3> : null}
            {copy ? <p className="card-copy">{copy}</p> : null}
          </div>
          {action}
        </div>
      )}
      {children}
    </article>
  );
}
