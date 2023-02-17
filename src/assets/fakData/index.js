import {
    aothun1a,
    aothun1b,
    aothun1c,
    aothun2a,
    aothun2b,
    aothun2c,
    aothun3a,
    aothun3b,
    aothun3c,
    aothun4a,
    aothun4b,
    aothun4c,
    aothun5a,
    aothun5b,
    aothun5c,
    aothun6a,
    aothun6b,
    aothun6c,
    aothun7a,
    aothun7b,
    aothun7c,
    aothun8a,
    aothun8b,
    aothun8c,
    crop1a,
    crop1b,
    crop1c,
    crop2a,
    crop2b,
    crop2c,
    crop3a,
    crop3b,
    crop3c,
    crop4a,
    crop4b,
    crop4c,
    crop5a,
    crop5b,
    crop5c,
    crop6a,
    crop6b,
    crop6c,
    crop7a,
    crop7b,
    crop7c,
    crop8a,
    crop8b,
    crop8c,
    len1a,
    len1b,
    len1c,
    len2a,
    len2b,
    len2c,
    len3a,
    len3b,
    len3c,
    len4a,
    len4b,
    len4c,
    len5a,
    len5b,
    len5c,
    len6a,
    len6b,
    len6c,
    len7a,
    len7b,
    len7c,
    len8a,
    len8b,
    len8c,
    somi1a,
    somi1b,
    somi1c,
    somi2a,
    somi2b,
    somi2c,
    somi3a,
    somi3b,
    somi3c,
    somi4a,
    somi4b,
    somi4c,
    somi5a,
    somi5b,
    somi5c,
    somi6a,
    somi6b,
    somi6c,
    somi7a,
    somi7b,
    somi7c,
    somi8a,
    somi8b,
    somi8c,
} from '../../components/getImg';

const data = [
    {
        name: 'Áo  thun thêu họa tiết',
        id: 1,
        img1: aothun1a,
        img2: aothun1b,
        img3: aothun1c,
        sex: 'male',
        rice: 1200000,
        branch: 'ao-thun',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 2,
        img1: aothun2a,
        img2: aothun2b,
        img3: aothun2c,
        sex: 'male',
        rice: 1970000,
        branch: 'ao-thun',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 3,
        img1: aothun3a,
        img2: aothun3b,
        img3: aothun3c,
        sex: 'male',
        rice: 1900000,
        branch: 'ao-thun',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 4,
        img1: aothun4a,
        img2: aothun4b,
        img3: aothun4c,
        sex: 'male',
        rice: 1280000,
        branch: 'ao-thun',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 5,
        img1: aothun5a,
        img2: aothun5b,
        img3: aothun5c,
        sex: 'male',
        rice: 5200000,
        branch: 'ao-thun',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 6,
        img1: aothun6a,
        img2: aothun6b,
        img3: aothun6c,
        sex: 'male',
        rice: 3200000,
        branch: 'ao-thun',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 7,
        img1: aothun7a,
        img2: aothun7b,
        img3: aothun7c,
        sex: 'male',
        rice: 1800000,
        branch: 'ao-thun',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 8,
        img1: aothun8a,
        img2: aothun8b,
        img3: aothun8c,
        sex: 'male',
        rice: 1290000,
        branch: 'ao-thun',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 9,
        img1: len1a,
        img2: len1b,
        img3: len1c,
        sex: 'male',
        rice: 1240000,
        branch: 'ao-len',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 10,
        img1: len2a,
        img2: len2b,
        img3: len2c,
        sex: 'male',
        rice: 2200000,
        branch: 'ao-len',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 11,
        img1: len3a,
        img2: len3b,
        img3: len3c,
        sex: 'male',
        rice: 800000,
        branch: 'ao-len',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 12,
        img1: len4a,
        img2: len4b,
        img3: len4c,
        sex: 'male',
        rice: 200000,
        branch: 'ao-len',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 13,
        img1: len5a,
        img2: len5b,
        img3: len5c,
        sex: 'male',
        rice: 1800000,
        branch: 'ao-len',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 14,
        img1: len6a,
        img2: len6b,
        img3: len6c,
        sex: 'male',
        rice: 3200000,
        branch: 'ao-len',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 15,
        img1: len7a,
        img2: len7b,
        img3: len7c,
        sex: 'male',
        rice: 1200000,
        branch: 'ao-len',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 16,
        img1: len8a,
        img2: len8b,
        img3: len8c,
        sex: 'male',
        rice: 1900000,
        branch: 'ao-len',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 17,
        img1: crop1a,
        img2: crop1b,
        img3: crop1c,
        sex: 'male',
        rice: 1280000,
        branch: 'crop',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 18,
        img1: crop2a,
        img2: crop2b,
        img3: crop2c,
        sex: 'male',
        rice: 2200000,
        branch: 'crop',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 19,
        img1: crop3a,
        img2: crop3b,
        img3: crop3c,
        sex: 'male',
        rice: 1300000,
        branch: 'crop',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 20,
        img1: crop4a,
        img2: crop4b,
        img3: crop4c,
        sex: 'male',
        rice: 1280000,
        branch: 'crop',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 21,
        img1: crop5a,
        img2: crop5b,
        img3: crop5c,
        sex: 'male',
        rice: 1150000,
        branch: 'crop',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 22,
        img1: crop6a,
        img2: crop6b,
        img3: crop6c,
        sex: 'male',
        rice: 200000,
        branch: 'crop',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 23,
        img1: crop7a,
        img2: crop7b,
        img3: crop7c,
        sex: 'male',
        rice: 1800000,
        branch: 'crop',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 24,
        img1: crop8a,
        img2: crop8b,
        img3: crop8c,
        sex: 'male',
        rice: 1200000,
        branch: 'crop',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 25,
        img1: somi1a,
        img2: somi1b,
        img3: somi1c,
        sex: 'male',
        rice: 1800000,
        branch: 'so-mi',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 26,
        img1: somi2a,
        img2: somi2b,
        img3: somi2c,
        sex: 'male',
        rice: 1700000,
        branch: 'so-mi',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 27,
        img1: somi3a,
        img2: somi3b,
        img3: somi3c,
        sex: 'male',
        rice: 1260000,
        branch: 'so-mi',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 28,
        img1: somi4a,
        img2: somi4b,
        img3: somi4c,
        sex: 'male',
        rice: 1340000,
        branch: 'so-mi',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 29,
        img1: somi5a,
        img2: somi5b,
        img3: somi5c,
        sex: 'male',
        rice: 1280000,
        branch: 'so-mi',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 30,
        img1: somi6a,
        img2: somi6b,
        img3: somi6c,
        sex: 'male',
        rice: 1780000,
        branch: 'so-mi',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 31,
        img1: somi7a,
        img2: somi7b,
        img3: somi7c,
        sex: 'male',
        rice: 1250000,
        branch: 'so-mi',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
    {
        name: 'Áo  thun thêu họa tiết',
        id: 32,
        img1: somi8a,
        img2: somi8b,
        img3: somi8c,
        sex: 'male',
        rice: 1800000,
        branch: 'so-mi',
        desc: 'Áo thun cổ tròn dáng slim fit. Chất liệu vải thun mềm mịn, thoáng mát. Họa tiết thêu lạ mắt, nổi bật trên nền màu tươi sáng giúp item này thu hút hơn bao giờ hết. Phối cùng jeans hay chân váy là nàng đã có 1 set đồ đi chơi trẻ trung, năng động!',
    },
];

const getBySlug = (info) => {
    return data.filter((p) => p.branch === info);
};
const getById = (info) => {
    return data.filter((p) => p.id === info);
};
export { getBySlug, getById };
