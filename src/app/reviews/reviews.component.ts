import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reviews = [
    {
      name: 'ناصر البرنس',
      title: 'صاحب مطعم البرنس',
      img: '/assets/person1.jpg',
      content: 'الشهرة التي يتمتع بها مطعمي حاليا تعود إلى جودة المحتوى بالإضافة إلى خطة تسويقية محكمة تم تنفيذها بالتعاون مع <span class="brand">شُهرة</span>.'
    },
    {
      name: 'نيكولاس خوري',
      title: 'مقدم برنامج السليط الإخباري',
      img: '/assets/person2.jpg',
      content: 'تعاونت مع <span class="brand">شُهرة</span> عدة مرات وأسعدني العمل معهم وتشرفت بمعرفتهم.'
    },
    {
      name: 'عبد المهيمن آغا',
      title: 'مؤسس شركة حسوب',
      img: '/assets/person3.png',
      content: 'هذه الشركة تقدم الخدمة بطريقة لم أرها في أي مكان آخر. لقد تعلموا مبادئ التسويق فطوروها وزادوا عليها خبرتهم.'
    },
    {
      name: 'سيف الدين سويلم',
      title: 'مطور مواقع',
      img: '/assets/person4.jpg',
      content: 'لم أكن أدري أن هذا الفكر المتطور موجود في عالمنا العربي، فقد وجدت معهم الأفكار العصرية التي لم يسبق تنفيذها والتي تتناسب مع احتياجات المستخدمين. شكرا'
    },
  ]

}
