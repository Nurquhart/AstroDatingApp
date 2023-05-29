enum Sign {
  Aries = 'ARIES',
  Taurus = 'TAURUS',
  Gemeni = 'GEMENI',
  Cancer = 'CANCER',
  Leo = 'LEO',
  Virgo = 'VIRGO',
  Libra = 'LIBRA',
  Scorpio = 'SCORPIO',
  Sagittarius = 'SAGITTARIUS',
  Capricorn = 'CAPRICORN',
  Aquarius = 'AQUARIUS',
  Pisces = 'PISCES',
}

export interface User {
  firstName: string;
  lastName: string;
  birthday: Date;
  birthplace: string;
  sign: Sign;
  bio: string;
  profilePic?: string;
}

export const sampleUserData: User[] = [
  {
    firstName: 'Steffan',
    lastName: 'Edwin',
    birthday: new Date('2000-07-27'),
    birthplace: '',
    sign: Sign.Leo,
    bio: 'this is my bio',
  },
  {
    firstName: 'Mikey',
    lastName: 'Lago',
    birthday: new Date('1999-01-02'),
    birthplace: '',
    sign: Sign.Capricorn,
    bio: 'this is my bio',
  },
  {
    firstName: 'Ago',
    lastName: 'Gennadi',
    birthday: new Date('1990-02-02'),
    birthplace: '',
    sign: Sign.Aquarius,
    bio: 'this is my bio',
  },
  {
    firstName: 'Conn',
    lastName: 'Yoel',
    birthday: new Date('1999-03-02'),
    birthplace: '',
    sign: Sign.Pisces,
    bio: 'this is my bio',
  },
  {
    firstName: 'Vasco',
    lastName: 'Lelle',
    birthday: new Date('1999-04-02'),
    birthplace: '',
    sign: Sign.Aries,
    bio: 'this is my bio',
  },
  {
    firstName: 'Slaven',
    lastName: 'Maximiliaan',
    birthday: new Date('1999-05-02'),
    birthplace: '',
    sign: Sign.Taurus,
    bio: 'this is my bio',
  },
  {
    firstName: 'Samar',
    lastName: 'Ambrosio',
    birthday: new Date('1999-06-02'),
    birthplace: '',
    sign: Sign.Gemeni,
    bio: 'this is my bio',
  },
  {
    firstName: 'Steffan',
    lastName: 'Edwin',
    birthday: new Date('1999-07-02'),
    birthplace: '',
    sign: Sign.Cancer,
    bio: 'this is my bio',
  },
  {
    firstName: 'Ellil',
    lastName: 'Sawyl',
    birthday: new Date('1999-09-02'),
    birthplace: '',
    sign: Sign.Virgo,
    bio: 'this is my bio',
  },
  {
    firstName: 'Grayson',
    lastName: 'Chukwu',
    birthday: new Date('1999-10-02'),
    birthplace: '',
    sign: Sign.Libra,
    bio: 'this is my bio',
  },
  {
    firstName: 'Stas',
    lastName: 'Wulfhram',
    birthday: new Date('1999-11-02'),
    birthplace: '',
    sign: Sign.Scorpio,
    bio: 'this is my bio',
  },
  {
    firstName: 'Rafa',
    lastName: 'Bowie',
    birthday: new Date('1999-12-02'),
    birthplace: '',
    sign: Sign.Sagittarius,
    bio: 'this is my bio',
  },
];
