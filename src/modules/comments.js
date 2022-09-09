export const getComment = async (id) => {
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nTyZtNP7uxSV8b3O2GI5/comments?item_id=${id}`
    );
    const data = await response.json();

    return data;
  };

export const postComment = async (id, user, comment) => {
  const options =   {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment: comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };

  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nTyZtNP7uxSV8b3O2GI5/comments', options)
    .then(() => getComment());
  
  /* const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nTyZtNP7uxSV8b3O2GI5/comments/',
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: id,
          username: user,
          comments: comment,
        }),
        headers: {
          'Content-type': 'application/json; charset=utf-8',
        },
      }
    ).then(() => getComment());
 */

  
  console.log(`id in url: ${id}`);
};
