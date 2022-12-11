const READ = Object.freeze({
  CREW_OR_TEAM: '크루관리는 1, 팀관리는 2번을 입력해주세요.\n',
  FIELD: '프론트엔드는 f, 백엔드는 b를 입력해주세요.\n',
  ACTION: '크루 추가는 a, 삭제는 d를 입력해주세요.\n',
  NAME: '크루 이름을 입력해주세요.\n',
});

const FIELD = Object.freeze({
  FRONT: 'f',
  BACK: 'b',
});

const INPUT = Object.freeze({
  CREW: '1',
  TEAM: '2',
  ADD: 'a',
  DELETE: 'd',
});

const ERROR = Object.freeze({
  MANAGEMENT: '[ERROR] 크루관리는 1, 팀관리는 2번을 입력해주세요.',
  FIELD: '[ERROR] 프론트엔드는 f, 백엔드는 b를 입력해주세요.',
  ACTION: '[ERROR] 크루 추가는 a, 삭제는 d를 입력해주세요.',
});

module.exports = {
  READ,
  FIELD,
  INPUT,
  ERROR,
};
