const token = process.env.TOKEN, unicorns = JSON.parse(process.env.UNICORNS || '["unicorn_face"]');
const api = new (require('slack'))({token}), events = new (require('slackbots'))({token: token});

events.on('message', data => {
  if (data.type !== 'reaction_added' || !unicorns.includes(data.reaction)) return;
  let params = {name: data.reaction};
  switch (data.item.type) {
    case 'message':
      params.channel = data.item.channel;
      params.timestamp = data.item.ts;
      break;
    case 'file':
      params.file = data.item.file;
      break;
    case 'file_comment':
      params.file_comment = data.item.file_comment;
  }
  api.reactions.add(params).catch(err => {err.message !== 'already_reacted' && console.error(err)});
});