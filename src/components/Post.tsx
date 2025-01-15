import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';
import { Comment } from '../components/Comment.tsx';
import { Avatar } from '../components/Avatar.tsx';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

export interface IPost {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string
  };
  content: {
    type: 'link' | 'paragraph';
    content: string
  }[];
  publishedAt: Date
}

interface PostProps {
  post: IPost;
}

export function Post({ post: { author, publishedAt, content } }: PostProps) {
  const [comments, setComments] = useState(['Post muito bacana hen!']);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, 'd \'de\' LLLL \'às\' HH:mm\'h\'', {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedComment = comments.filter(comment => comment !== commentToDelete);
    setComments(commentsWithoutDeletedComment);
  }

  const isNewCommentEmpty = newCommentText.trim().length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return (
              <p key={line.content}>{line.content}</p>
            );
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href={''}>{line.content}</a>
              </p>
            );
          } else {
            return null;
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixei seu feedback</strong>
        <textarea
          required
          onInvalid={handleNewCommentInvalid}
          name={'comment'}
          placeholder={'Deixe um comentário'}
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type={'submit'} disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
