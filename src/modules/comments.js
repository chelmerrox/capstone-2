export default class Comments {
  getComment = async (id) => {
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nTyZtNP7uxSV8b3O2GI5/comments?item_id=${id}`
    );
    const data = await response.json();
    return data;
  };

  postComment = async (id, user, comment) => {
    await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nTyZtNP7uxSV8b3O2GI5/comments/',
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: id,
          username: user,
          comment,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
  };
}
