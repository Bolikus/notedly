import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';
import { GET_MY_NOTES } from '../gql/query';

const MyNotes = () => {
  useEffect(() => {
    // Обновляем заголовок документа
    document.title = 'My Notes — Notedly';
  });

  const { loading, error, data } = useQuery(GET_MY_NOTES);

  //Если данные загружаются, выдаем сообщение о загрузке
  if (loading) return 'Loading...';

  //Если при получении данных произошел сбой, выдаем сообщение об ошибке
  if (error) return `Error! ${error.message}`;

  //Если запрос выполнен успешно и содержит заметки, возвращаем их в ленту.
  //Если же запрос выполнен успешно, но заметок в нем нет,
  //выдаем сообщение "No notes yet"

  if (data.me.notes.length !== 0) {
    return <NoteFeed notes={data.me.notes} />;
  } else {
    return <p>No notes yet</p>;
  }
};
export default MyNotes;
