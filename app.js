Vue.createApp({
    data() {
      return {
        boxASelected: false,
        boxBSelected: false,
        boxCSelected: false,
      };
    },
    methods: {
      change(boxName) {
        if (boxName == 'A') {
            this.boxASelected = !this.boxASelected;
        } else if (boxName == 'B') {
            this.boxBSelected = !this.boxBSelected;
        } else {
            this.boxCSelected = !this.boxCSelected;
        }
      },
  
      removeGoal(goal) {
        this.goals.splice(this.goals.indexOf(goal), 1);
      }
    }
  }).mount('#styling');