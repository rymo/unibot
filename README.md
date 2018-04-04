### Unicorn Reaction Amplifier bot

    heroku config:add TOKEN=[slack bot token]
    heroku config:add UNICORNS="[\"unicorn_face\", \"uniup\", \"unidown\", \"unispin\", \"unicorn2\", \"uniright\", \"unirainbow\"]"
    heroku scale web=0 service=1