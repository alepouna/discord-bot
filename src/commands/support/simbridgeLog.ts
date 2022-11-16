import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed, makeLines } from '../../lib/embed';

export const simridgeLog: CommandDefinition = {
    name: ['simbridgelog', 'slog'],
    description: 'Information on how to provide SimBridge Log',
    category: CommandCategory.SUPPORT,
    executor: (msg) => {
        const simbridgeLogEmbed = makeEmbed({
            title: 'FlyByWire Support | SimBridge Log',
            description: makeLines([
                'Please send us your SimBridge Log for further investigation.',
                '',
                'You will find your log file here: `<YOUR_COMMUNITY_FOLDER>\\flybywire-externaltools-simbridge\\resources\\logs`, the title will include the date of the log.',
                '',
                'More information can be found [here.](https://docs.flybywiresim.com/simbridge/troubleshooting/#logfile)',
            ]),
        });

        return msg.channel.send({ embeds: [simbridgeLogEmbed] });
    },
};
