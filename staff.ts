export type StaffMember = {
  id: string
  name: string
  nameKana: string
  role: string
  title: string
  photo: string
  specialties: string[]
  message: string
  career: { year: string; event: string }[]
  qualifications: string[]
  affiliations: string[]
}

// ===================================================================
// ここに実際の先生の情報を入力してください
// ===================================================================
export const staffMembers: StaffMember[] = [
  {
    id: 'director',
    name: '先生のお名前',           // ← 実際のお名前に変更してください
    nameKana: 'せんせい　おなまえ', // ← 読み仮名を入力してください
    role: '院長',
    title: '医学博士',             // ← 該当する称号に変更してください
    photo: '/doctor-portrait.png', // ← 実際の写真パスに変更してください
    specialties: [
      '白内障手術',
      '緑内障',
      '小児眼科・弱視',
      '網膜疾患',
    ], // ← 専門分野を入力してください
    message:
      '患者さまお一人おひとりに寄り添い、丁寧でわかりやすい説明を心がけています。目のことで気になることがあれば、どんな些細なことでもお気軽にご相談ください。',
    // ← ご挨拶文を入力してください
    career: [
      { year: '20XX年', event: '〇〇大学医学部 卒業' },
      { year: '20XX年', event: '〇〇大学附属病院 眼科 入局' },
      { year: '20XX年', event: '〇〇病院 眼科 勤務' },
      { year: '20XX年', event: '眼科とよす医院 開院' },
    ], // ← 実際の経歴に変更してください
    qualifications: [
      '日本眼科学会認定 眼科専門医',
    ], // ← 資格・認定を追加してください
    affiliations: [
      '日本眼科学会',
      '日本眼科手術学会',
    ], // ← 所属学会を追加してください
  },
  // ── 先生を追加する場合はここから下にコピーして追加してください ──
  // {
  //   id: 'second-doctor',
  //   name: '先生のお名前',
  //   nameKana: 'せんせい　おなまえ',
  //   role: '非常勤医師',
  //   title: '',
  //   photo: '/doctor-2.png',
  //   specialties: [],
  //   message: '',
  //   career: [],
  //   qualifications: [],
  //   affiliations: [],
  // },
]
