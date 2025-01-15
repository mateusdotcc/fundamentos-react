import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../components/Avatar.tsx';
import { useState } from 'react';

interface CommentProps {
  content?: string,
  onDeleteComment?: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
  }

  function handleDeleteComment() {
    onDeleteComment?.(content!);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Devon Lane (você)</strong>
              <time title={'11 de Maio às 08:13h'} dateTime={'2022-05-11 08:13:30'}>Cerca de 1h atrás</time>
            </div>

            <button title={'Deletar comentários'} onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button type={'button'} onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
