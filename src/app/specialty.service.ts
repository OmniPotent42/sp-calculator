import { Injectable } from '@angular/core';
import { Purchasable } from './purchasable';

@Injectable()
export class SpecialtyService {
  private spData = [
    {
      tabName: 'rookie',
      specialties: [
        {
          name: 'attack damage 1',
          start: 50,
          max: 5,
          modifier: '+40',
          icon: 'attack damage',
          tooltip: 'all ally Attack Damage increased by invested points x 3%'
        },
        {
          name: 'attack speed 1',
          start: 50,
          max: 5,
          modifier: '+40',
          icon: 'attack speed',
          tooltip: 'all ally Attack Speed increased by invested points x 3%'
        },
        {
          name: 'skill damage 1',
          start: 50,
          max: 5,
          modifier: '+40',
          icon: 'skill damage',
          tooltip: 'all ally Skill Damage increased by invested points x 5%'
        },
        {
          name: 'exchange+',
          start: 100,
          max: 20,
          modifier: '+50',
          icon: 'exchange',
          tooltip: 'increase unit exchange amount by 1'
        }
      ]
    },
    {
      tabName: 'beginner',
      specialties: [
        {
          name: 'critical chance',
          start: 100,
          max: 10,
          modifier: '+75',
          icon: 'critical chance',
          tooltip: 'all ally critical chance increased by invested points x 1%'
        },
        {
          name: 'movement speed+',
          start: 150,
          max: 3,
          modifier: '+75',
          icon: 'movement speed',
          tooltip: 'all ally movement speed increased by invested points x 10%'
        },
        {
          name: 'attack range 1',
          start: 100,
          max: 5,
          modifier: '+50',
          icon: 'attack range',
          tooltip: 'all ally attack range increased by invested points x 3%'
        },
        {
          name: 'mineral+',
          start: 150,
          max: 4,
          modifier: '+75',
          icon: 'mineral',
          tooltip: 'increase mineral amount by 1'
        },
        {
          name: 'gas+',
          start: 75,
          max: 8,
          modifier: '+75',
          icon: 'gas',
          tooltip: 'increase gas amount by 2'
        },
        {
          name: 'life+',
          start: 75,
          max: 10,
          modifier: '+40',
          icon: 'life',
          tooltip: 'increase life by 1'
        }
      ]
    },
    {
      tabName: 'amateur',
      specialties: [
        {
          name: 'attack damage 2',
          start: 100,
          max: 15,
          modifier: '+70',
          icon: 'attack damage',
          tooltip: 'all ally attack damage increased by invested points x 2%'
        },
        {
          name: 'attack speed 2',
          start: 100,
          max: 15,
          modifier: '+70',
          icon: 'attack speed',
          tooltip: 'all ally attack speed increased by invested points x 1.5%'
        },
        {
          name: 'skill damage 2',
          start: 100,
          max: 15,
          modifier: '+70',
          icon: 'skill damage',
          tooltip: 'all ally skill damage increased by invested points x 4%'
        },
        {
          name: 'gas revision',
          start: 350,
          max: 4,
          modifier: '+175',
          icon: 'gas revision',
          tooltip: 'increase minimum value of the gas lottery'
        },
        {
          name: 'unit XP+',
          start: 200,
          max: 10,
          modifier: '+100',
          icon: 'unit xp',
          tooltip: 'increase experience gain ratio for unit level by [invested points x 25]%'
        },
        {
          name: 'interest rate+',
          start: 200,
          max: 10,
          modifier: '+100',
          icon: 'interest rate',
          tooltip: 'interest rate + 0.1%'
        },
        {
          name: 'maximum upgrade+',
          start: 350,
          max: 10,
          modifier: '+300',
          icon: 'max upgrade',
          tooltip: '+1 unit upgrade attempt'
        },
        {
          name: '@sell lotto',
          start: 150,
          max: 20,
          modifier: '+75',
          icon: 'sell lotto',
          tooltip: 'when selling units, gain [invested points x 2.5%] chance to double minerals recieved'
        }
      ]
    },
    {
      tabName: 'professional',
      specialties: [
        {
          name: 'attack damage 3',
          start: 150,
          max: 60,
          modifier: '+75',
          icon: 'attack damage',
          tooltip: 'all ally attack damage increased by invested points x 1%'
        },
        {
          name: 'attack speed 3',
          start: 150,
          max: 60,
          modifier: '+75',
          icon: 'attack speed',
          tooltip: 'all ally attack speed increased by invested points x 0.5%'
        },
        {
          name: 'skill damage 3',
          start: 150,
          max: 60,
          modifier: '+75',
          icon: 'skill damage',
          tooltip: 'all ally skill damage increased by invested points x 3%'
        },
        {
          name: 'basic rank',
          start: 300,
          max: 4,
          modifier: '+300',
          icon: 'basic rank',
          tooltip: 'get better rank on basic units'
        },
        {
          name: 'upgrade revision 1',
          start: 300,
          max: 5,
          modifier: '+350',
          icon: 'upgrade revision 1',
          tooltip: 'increases rate of upgrade success'
        },
        {
          name: 'upgrade revision 2',
          start: 700,
          max: 3,
          modifier: '+350',
          icon: 'upgrade revision 2',
          tooltip: 'if enchantment fails, next success possibility is increased significantly'
        },
        {
          name: 'rank revision',
          start: 350,
          max: 5,
          modifier: '+350',
          icon: 'rank revision',
          tooltip: 'increase higher rank possibilities on rank resetting process'
        },
        {
          name: 'card revision',
          start: 350,
          max: 3,
          modifier: '+350',
          icon: 'card revision',
          tooltip: 'likely to get higher tier unit from golden cards'
        }
      ]
    },
    {
      tabName: 'expert',
      specialties: [
        {
          name: 'critical chance 2',
          start: 200,
          max: 60,
          modifier: '+75',
          icon: 'critical chance',
          tooltip: 'all ally critical chance increased by invested points x 0.5%'
        },
        {
          name: 'movement speed 2',
          start: 400,
          max: 3,
          modifier: '+150',
          icon: 'movement speed',
          tooltip: 'all ally movement speed increased by invested points x 10%'
        },
        {
          name: 'critical damage',
          start: 200,
          max: 60,
          modifier: '+90',
          icon: 'critical damage',
          tooltip: 'all ally critical damage increased by invested points x 3%'
        },
        {
          name: 'multi critical',
          start: 350,
          max: 20,
          modifier: '*2',
          icon: 'multi critical',
          tooltip: 'increase chance of multi-critical strikes. Multicrit % is half of critical chance %.'
        },
        {
          name: 'unit lottery revision',
          start: 100,
          max: 40,
          modifier: '+40',
          icon: 'unit lottery revision',
          tooltip: 'chance for unit lottery to give double units increased by invested points x 0.5%'
        },
        {
          name: 'gas lottery revision',
          start: 100,
          max: 40,
          modifier: '+40',
          icon: 'gas revision',
          tooltip: 'chance for gas lottery to give double gas amount by invested points x 0.5%'
        },
        {
          name: 'bank lotto',
          start: 100,
          max: 40,
          modifier: '+75',
          icon: 'bank lotto',
          tooltip: 'chance to double interest payments by invested points x 0.5%'
        },
        {
          name: 'horse XP',
          start: 200,
          max: 20,
          modifier: '+100',
          icon: 'horse xp',
          tooltip: 'winning 1st place in horse race gives XP related to your investement'
        }
      ]
    },
    {
      tabName: 'master',
      specialties: [
        {
          name: 'attack range 2',
          start: 2000,
          max: 1,
          modifier: '+0',
          icon: 'attack range',
          tooltip: 'increase ally attack range by 1'
        },
        {
          name: 'break shield',
          start: 400,
          max: 20,
          modifier: '+200',
          icon: 'break shield',
          tooltip: 'decrease enemy armor by invested points x 2%'
        },
        {
          name: 'lottery revision',
          start: 750,
          max: 15,
          modifier: '+350',
          icon: 'lottery revision',
          tooltip: 'increase chance of recieving higher rank units from unit lottery'
        },
        {
          name: 'cooldown-',
          start: 400,
          max: 20,
          modifier: '+200',
          icon: 'cooldown-',
          tooltip: 'decrease all ally skill cooldowns by invested points x 5%'
        },
        {
          name: 'mineral lotto',
          start: 200,
          max: 60,
          modifier: '+75',
          icon: 'mineral lotto',
          tooltip: 'when you kill an enemy, increase chance to recieve 1 mineral by invested points x 0.1%'
        },
        {
          name: 'gas lotto',
          start: 200,
          max: 60,
          modifier: '+75',
          icon: 'gas lotto',
          tooltip: 'when you kill an enemy, increase chance to recieve 1 gas by invested points x 0.3%'
        },
        {
          name: 'XP limit',
          start: 350,
          max: 40,
          modifier: '+350',
          icon: 'xp limit',
          tooltip: 'increase max XP per round by invested points x 1'
        },
        {
          name: 'XP lotto',
          start: 200,
          max: 60,
          modifier: '+100',
          icon: 'xp lotto',
          tooltip: 'chance to receive double XP at end of round increased by 0.1%'
        }
      ]
    },
    {
      tabName: 'divine',
      specialties: [
        {
          name: 'team attack damage',
          start: 700,
          max: 20,
          modifier: '+150',
          icon: 'attack damage',
          tooltip: 'increase team attack damage by invested points x 1%'
        },
        {
          name: 'team attack speed',
          start: 700,
          max: 20,
          modifier: '+150',
          icon: 'attack speed',
          tooltip: 'increase team attack speed by invested points x 1%'
        },
        {
          name: 'team critical chance',
          start: 700,
          max: 20,
          modifier: '+150',
          icon: 'critical chance',
          tooltip: 'increase team critical chance by invested points x 0.5%'
        },
        {
          name: 'team exchange+',
          start: 700,
          max: 20,
          modifier: '+150',
          icon: 'exchange',
          tooltip: '+1 unit exchange for all team members'
        },
        {
          name: 'special max energy',
          start: 150,
          max: 60,
          modifier: '+100',
          icon: 'special max energy',
          tooltip: 'increase lottery shrine max energy by invested points x 50'
        },
        {
          name: 'SP Bank',
          start: 8000,
          max: 50,
          modifier: '+200',
          icon: 'bank lotto',
          tooltip: 'every 10 rounds, receive SP equal to invested points x 1000'
        },
        {
          name: 'kill energy',
          start: 200,
          max: 60,
          modifier: '+100',
          icon: 'kill energy',
          tooltip: 'increase chance to gain 1 shrine energy per enemy killed by invested points x 1%'
        },
        {
          name: 'kill xp',
          start: 200,
          max: 60,
          modifier: '+100',
          icon: 'kill xp',
          tooltip: 'chance to gain 1 XP per enemy killed increased by invested points x 0.02%'
        }
      ]
    }
  ];

  public getData = function() {
    const tabs = this.spData;
    
    for (let i = 0; i < tabs.length; i++) {
      for (let j = 0; j < tabs[i].specialties.length; j++) {
        tabs[i].specialties[j] = new Purchasable(tabs[i].specialties[j]);

      }
    }
    
    console.log(tabs);
    return tabs;
  };
}
