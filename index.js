var demo = new Vue({
	el: '#demo',
	data: {
		collectionName: 'todo',
		member: [{
			name: "title",
			type: "String"
		}]
	},
	computed: {
		output: function () {
			var members = this.$data.member.map(function (item) {
				return item.name + ":" + item.type;
			});

			return "compound g scaffold " + this.$data.collectionName + " " +
				members.join(" ");
		}
	},
	methods: {
		addMember: function () {
			var count = this.$data.member.length;
			this.$data.member.push({
				name: "item" + count,
				type: "String"
			});
		},
		removeMember: function (item) {
			this.$data.member.splice(
				item.$index, 1);
		}
	}
});
