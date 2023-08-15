import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/adrfelipe.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>André Felipe</strong>
              <time title="15 de Agosto às 14:00" dateTime="2023-08-15 14:00:00">Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}